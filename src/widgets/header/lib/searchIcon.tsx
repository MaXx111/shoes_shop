interface SearchIconProps {
    clickHandler: () => void
}

export const SearchIcon = ({clickHandler}: SearchIconProps) => {

    return(
        <>
            <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={() => clickHandler()}></div>
        </>
    )
}