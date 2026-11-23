import Field from './Field.jsx'
import Button from './Button.jsx'

const AddTaskForm = (props) => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
    } = props

    const onSubmit = (e) => {
        e.preventDefault()
        addTask()
    }

    return (
        <form
            className = "todo__form"
            onSubmit = {onSubmit}
        >
            <Field
                className = "todo__field"
                id = "new-task"
                label = "Новая задача"
                value = {newTaskTitle}
                onInput = {(e) => setNewTaskTitle(e.target.value)}
            />
            <Button
                type = "submit"
                children = "Ввод"
            />
        </form>
    )
}

export default AddTaskForm
