import Field from './Field.jsx'

const SearchTaskForm = (props) => {
    const {
        onSearchInput,
    } = props

    return (
        <form
            className = "todo__form"
            onSubmit = {(e) => {
                e.preventDefault()
            }}
        >
            <Field
                className = "todo__field"
                id = "search-task"
                label = "Найти задачу"
                type = "search"
                onInput = {(e) => {
                    onSearchInput(e.target.value)
                }}
            />
        </form>
    )
}

export default SearchTaskForm
