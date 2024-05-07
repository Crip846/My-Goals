import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({ onAddGoal }){

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={StyleSheet.inputContainer}>
            <TextInput
            style={StyleSheet.textInput}
            placeholder='Your Goal'
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            />
            <Button
            title="Add Goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </View>
    )

}

export default GoalInput 

const styles = StylesSheet.create({
    inputContainer:{
        flex: 1,
        flexDirector: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBotton: 20,
        borderBottonWidth: 1,
        borderBottonColor:'#7bc9ff'

    },
    textInput:{
        borderWidth:1,
        borderColor: '#CCCCCC',
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRaduis: 5
    },
})