import React, { useEffect } from "react";
import Updates from 'expo-updates';

import Providers from './navigation';

export default function App() {
	useEffect(() => {
		async function updateApp() {
			const { isAvailable } = await Updates.checkForUpdateAsync();

			if (isAvailable) {
				await Updates.fetchUpdateAsync();
			}
		}

		updateApp();
	}, []);

	return <Providers />;
}
