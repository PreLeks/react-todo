import Field from './Field.jsx'
import Button from './Button.jsx'

const AddTaskForm = () => {
    return (
        <form className = "todo__form">
            <Field
                className = "todo__field"
                id = "new-task"
                label = "Новая задача"
            />
            <Button
                type = "submit"
                children = "Ввод"
            />
        </form>
    )
}

export default AddTaskForm
