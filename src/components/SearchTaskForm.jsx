import Field from './Field.jsx'

const SearchTaskForm = (props) => {
    const {
        searchQuery,
        setSearchQuery,
    } = props

    return (
        <form
            className="todo__form"
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <Field
                className="todo__field"
                id="search-task"
                label="Найти задачу"
                type="search"
                value={searchQuery}
                onInput={(e) => {
                    setSearchQuery(e.target.value)
                }}
            />
        </form>
    )
}

export default SearchTaskForm
