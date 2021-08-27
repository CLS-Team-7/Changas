import React, { useEffect } from 'react';
import { getSingleUser } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import Rating from '../Review/Rating';

function UserProfile() {
    const { isAuthenticated } = useAuth0();

    const dispatch = useDispatch()
    let { id } = useParams();
    const user = useSelector(state => state.singleUser)


    useEffect(() => {
        dispatch(getSingleUser(id))
        //dispatch(UpdateUserData({sub: user.sub, score : user.score})) // le pega a la DB y actualiza el score
    }, [dispatch, id])


    // logica para calcular score internamente
    let userPosts = [];
    let postReviews = [];
    let validatedReviews = [];
    let allReviewsRating = [];
    let totalRating = 0;
    if (user.posts?.length) {
        userPosts = user.posts?.map(p => p);

        postReviews = userPosts?.map(p => p.reviews);


        validatedReviews = postReviews[0]?.filter(r => r.isValidated)


        allReviewsRating = validatedReviews?.map(review => review.rating);


        if (allReviewsRating.length) {
            totalRating = allReviewsRating?.reduce((a, b) => {
                return a + b
            })

            totalRating > 0 ? user.score = (totalRating / postReviews[0].length).toFixed(1) : user.score = 0
        }
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg min-h-screen">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 bold">Información Personal</h3>
                <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
                    <div className="flex-row gap-4 flex justify-center items-center">
                        <div className="flex-shrink-0">
                            <img alt="user" src={user.picture} className="mx-auto object-cover rounded-full h-16 w-16 " />
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Nombre Completo</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.firstName ? user.firstName : user.given_name} {user.lastName ? user.lastName : user.family_name}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.phoneNumber}
                            <WhatsAppButton userPhone={user.phoneNumber} />
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 bold">{user.email}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Puntaje promedio</dt>

                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 bold">{user.score} {<Rating rating={Math.round(user.score)} />} </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Trabajos realizados a otros usuarios</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 bold">{user.jobsDone === 0 ? "Ninguno por ahora. ¡Sé el primero en contratarlo!" : user.jobsDone}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Sobre {user.given_name}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 bold">{user.summary}</dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Publicaciones</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                {
                                    user.posts?.map(e => {
                                        return <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <h2 className="ml-2 flex-1 w-0 truncate bold font-medium">{e.title}</h2>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <Link to={`/posts/${e.id}`} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Ir a la publicación
                                                </Link>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
            <div>
                {isAuthenticated ?
                    <Link to={`/report/user/${id}`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reportar</button></Link>
                    : null}
            </div>
        </div>
    )
}

export default UserProfile
