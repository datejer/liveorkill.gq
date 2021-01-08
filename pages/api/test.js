module.exports = (req, res) => {
	let decisions = [
		{
			text: "Live",
			favicon: "https://liveorkill-gq.vercel.app/water.png",
			img: "https://liveorkill-gq.vercel.app/live.jpg",
		},
		{
			text: "Kill",
			favicon: "https://liveorkill-gq.vercel.app/monster.png",
			img: "https://liveorkill-gq.vercel.app/kill.jpg",
		},
	];

	let decision = decisions[Math.floor(Math.random() * decisions.length)];

	res.send(`
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>${decision.text}</title>
				<link rel="icon" href="${decision.favicon}" />

				<meta name="title" content="${decision.text}" />
				<meta name="description" content="he has decided: ${decision.text}" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://liveorkill.gq/" />
				<meta property="og:title" content="${decision.text}" />
				<meta
					property="og:description"
					content="he has decided: ${decision.text}"
				/>
				<meta
					property="og:image"
					content="https://liveorkill-gq.ejer.vercel.app${decision.img}"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://liveorkill.gq/" />
				<meta property="twitter:title" content="${decision.text}" />
				<meta
					property="twitter:description"
					content="he has decided: ${decision.text}"
				/>
				<meta
					property="twitter:image"
					content="https://liveorkill-gq.ejer.vercel.app${decision.img}"
				/>
			</head>
			<body><img src="${decision.img}"/></body>
		</html>`);
};
