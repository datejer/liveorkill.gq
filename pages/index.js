import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [decision, setDecision] = useState({
		text: "Live",
		favicon: "/water.png",
		img: "/live.jpg",
	});

	useEffect(() => {
		if (Math.round(Math.random()) > 0)
			setDecision({ text: "Live", favicon: "/water.png", img: "/live.jpg" });
		else
			setDecision({ text: "Kill", favicon: "/monster.png", img: "/kill.jpg" });
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>{decision.text}</title>
				<link rel="icon" href={decision.favicon} />

				<meta name="title" content={decision.text} />
				<meta name="description" content={`he has decided: ${decision.text}`} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://liveorkill.gq/" />
				<meta property="og:title" content={decision.text} />
				<meta
					property="og:description"
					content={`he has decided: ${decision.text}`}
				/>
				<meta
					property="og:image"
					content={`https://liveorkill-gq.ejer.vercel.app${decision.img}`}
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://liveorkill.gq/" />
				<meta property="twitter:title" content={decision.text} />
				<meta
					property="twitter:description"
					content={`he has decided: ${decision.text}`}
				/>
				<meta
					property="twitter:image"
					content={`https://liveorkill-gq.ejer.vercel.app${decision.img}`}
				/>
			</Head>
			<img src={decision.img} className={styles.image} />
		</div>
	);
}
