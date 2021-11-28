import React from 'react'

function Items( {numberItems, filterText} ) {

    const listItems = numberItems
        .filter(text => {
            return text.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
        })
        .map(item => (
            <React.Fragment key={item.id}>
                <div className="search-items">{item.name}</div>
            </React.Fragment>
    ))

    return (
        <div className="container-item">
            {listItems}
        </div>
    )
}

export default Items
