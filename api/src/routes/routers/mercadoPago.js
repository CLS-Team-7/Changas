const server = require('express').Router();
//const { Order } = require('../../models/Order');
const { User, Post, Order } = require("../../db.js");
// SDK de Mercado Pago
const mercadopago = require('mercadopago');
const { MP_ACCESS_TOKEN } = process.env;

const ACCESS_TOKEN = MP_ACCESS_TOKEN;

// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN
});


//Ruta que genera la URL de MercadoPago
server.get("/", (req, res, next) => {

  const id_orden = 1

  // Entiendo que la mecánica con MP y el back podría ser algo así, iniciando con un user que quiere promocionar su posteo:
  //
  // 1) El user tiene que hacer click, en un boton en su panel donde tiene todos sus posteos, que diga en cada post: "promocionar"
  //  y que eso lo redirija a un componente "NuevaOrder" donde va a elegir 3 opciones (promocion semanal / quincenal / mensual).
  //  De ahi, el user elige uno y al hacerle click:
  //  - se hace un dispatch al back con un POST a /order con la siguiente info por req.body:
  //                 { user_id, post_id, option, price(tiene default), quantity(tiene default) } -> el POST devuelve la nueva order con su id. (se guarda en la store)
  //  - se hace un redirect del user a un componente "Checkout", donde se renderiza la order con los datos para verificar que todo sea correcto.
  // 2)  Desde checkout, se consume directo de la store la order creada, y eso es lo que finalmente se setea como preference para mandar a mercadopago, se manda en el get"/"
  // 3) con el preference seteado, se hace toda la magia con MP. MP procesa todo, y si es "success" o "failure", lo redirige a las views que le hayamos creado.

  // Esta forma de hacerlo nos permitiria hacer un carrito mas adelante si queremos, un poco mas complejo para implementar pero posible


  //Cargamos el carrido de la bd ------> aplica paso 2)
  const carrito = [
    { title: "Producto 1", quantity: 5, price: 10.52 }, // "Promocion publicacion semanal / quincenal / mensual "
    // { title: "Producto 2", quantity: 15, price: 100.52 },
    // { title: "Producto 3", quantity: 6, price: 200 }
  ];

  const items_ml = carrito.map(i => ({
    title: i.title,
    unit_price: i.price,
    quantity: i.quantity,
  }))

  // Crea un objeto de preferencia
  let preference = {
    items: items_ml,
    external_reference: `${id_orden}`, // ese tiene que ser el order_id, lo saco de la store porque ya creé la order interna en mi DB
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm"
        }
      ],
      installments: 1  //Cantidad máximo de cuotas
    },
    back_urls: {
      success: 'https://changas.herokuapp.com/mercadopago/pagos', // cuando MP lo manda aca, se hace un PUT al back a /order/:idOrder con el nuevo status de la order para actualizarla, junto con el id de MP
      failure: 'https://changas.herokuapp.com/mercadopago/pagos', // entiendo que habria que hacer /success, /failure, etc.. y no todo /pagos
      pending: 'https://changas.herokuapp.com/mercadopago/pagos',
    },
  };

  let mpData = [ // que muestra la data mas importante, no todo el body.
    'client_id', 'collector_id',
    'date_created', 'external_reference',
    'id', 'init_point',
    'items',
    'operation_type',
    'payment_methods', 'redirect_urls',
    'sandbox_init_point', 'total_amount',
    'last_updated'
  ];

  mercadopago.preferences.create(preference)

    .then(function (response) {
      console.info('********MP RESPONDIO********')
      //Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id;

      mpData.forEach(d => console.log({ [`${d}`]: response.body[d] }));
      res.json({ id: global.id });
    })
    .catch(function (error) {

      next(err)
    })
})



//Ruta que recibe la información del pago
server.get("/pagos", (req, res) => {              // no entiendo bien esta parte, a MP a buscar datos de pago??
  console.info("EN LA RUTA PAGOS ", req)
  const payment_id = req.query.payment_id
  const payment_status = req.query.status
  const external_reference = req.query.external_reference
  const merchant_order_id = req.query.merchant_order_id


  //Aquí edito el status de mi orden --> pero en MP o en la DB??
  Order.findByPk(external_reference)
    .then((order) => {
      order.payment_id = payment_id
      order.payment_status = payment_status
      order.merchant_order_id = merchant_order_id
      order.status = "completed" // isComplete = true y status = 'approved'
      console.info('Salvando order')
      order.save()                // entiendo que esto tira un popup para guardar la order en la computadora del user. Si no, no entiendo que hace
        .then((_) => {
          console.info('redirect success')

          return res.redirect("https://changas.vercel.app")
        })
        .catch((err) => {
          console.error('error al salvar', err)
          return res.redirect(`https://changas.vercel.app/?error=${err}&where=al+salvar`)
        })
    })
    .catch(err => {
      console.error('error al buscar', err)
      return res.redirect(`https://changas.vercel.app/?error=${err}&where=al+buscar`)
    })

  //proceso los datos del pago 
  //redirijo de nuevo a react con mensaje de exito, falla o pendiente
})


//Busco información de una orden de pago
server.get("/pagos/:id", (req, res) => {
  const mp = new mercadopago(ACCESS_TOKEN)
  const id = req.params.id
  console.info("Buscando el id", id)
  mp.get(`/v1/payments/search`, { 'status': 'pending' }) //{"external_reference":id})
    .then(resultado => {
      console.info('resultado', resultado)
      res.json({ "resultado": resultado })
    })
    .catch(err => {
      console.error('No se consulto:', err)
      res.json({
        error: err
      })
    })
})

module.exports = server;