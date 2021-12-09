import React from 'react';

export interface Props {
    onAdd?: (query: string) => void;
}

const Search = (props: Props) => {
    const { onAdd } = props;

    const [query, setQuery] = React.useState("");

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(evt.target.value);
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onAdd && onAdd(query);
        setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span className="visually-hidden">Search</span>
                <input
                    type="text"
                    placeholder="Add new songs..."
                    value={query}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Add</button>
        </form>
    );
};

export default Search;
