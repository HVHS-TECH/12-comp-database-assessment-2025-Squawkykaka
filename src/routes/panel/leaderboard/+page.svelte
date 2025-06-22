<script lang="ts">
	import { fb_db } from '$lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';

	let gameRef = doc(fb_db, 'games');

	// async function getGames() {
	// 	const gameSnap = await getDoc(gameRef);
	// }
</script>

leaderboard
