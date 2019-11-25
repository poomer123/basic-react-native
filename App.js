import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'

export default function App() {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<Text>Welcome..</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
