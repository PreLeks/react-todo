import Field from './Field.jsx'

const SearchTaskForm = () => {
    return (
        <form className = "todo__form">
            <Field
                className = "todo__field"
                id = "search-task"
                label = "Найти задачу"
                type = "search"
            />
        </form>
    )
}

export default SearchTaskForm
