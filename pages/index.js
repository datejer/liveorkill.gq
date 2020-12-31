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
			</Head>
			<img src={decision.img} className={styles.image} />
		</div>
	);
}
