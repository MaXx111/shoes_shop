interface SearchIconProps {
    clickHandler: () => void
}

export const SearchIcon: React.FC<SearchIconProps> = ({clickHandler}) => {

    return(
        <>
            <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={() => clickHandler()}></div>
        </>
    )
}