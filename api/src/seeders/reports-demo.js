const reportsDB = [
	{
		id: 100,
		reportSubject: "user",
		user_id: "e2f1cfbd-6c29-477d-b4eb-dbb69081dfd1",
		reported_user: "416541a4-7724-4fbb-a5ff-ea9f5b1b27bb",
		post_id: null,
		question_id: null,
		answer_id: null,
		complaint: "denuncia 100 a user: JRR es un bot",
		evidence: "link evidencia / archivo print de pantalla",
		isSettled: false
	},
	{
		id: 101,
		reportSubject: "post",
		user_id: "e2f1cfbd-6c29-477d-b4eb-dbb69081dfd1",
		reported_user: null,
		post_id: "eca2c312-b2ee-47e1-9f28-398c854f3fec",
		question_id: null,
		answer_id: null,
		complaint: "denuncia 101 a post: El auto que tiene es robado",
		evidence: "",
		isSettled: false
	},
	{
		id: 102,
		reportSubject: "question",
		user_id: "e2f1cfbd-6c29-477d-b4eb-dbb69081dfd1",
		reported_user: null,
		post_id: null,
		question_id: 10002,
		answer_id: null,
		complaint: "denuncia 102 a question: No esta haciendo ninguna pregunta",
		evidence: "",
		isSettled: false
	},
	{
		id: 103,
		reportSubject: "answer",
		user_id: "e2f1cfbd-6c29-477d-b4eb-dbb69081dfd1",
		reported_user: null,
		post_id: null,
		question_id: null,
		answer_id: 1008,
		complaint: "denuncia 103 a answer: No es una respuesta",
		evidence: "",
		isSettled: false
	},
];

module.exports = reportsDB;