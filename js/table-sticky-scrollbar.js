
class TableStickyScrollbar {
    isInitialized = false
    selector = 'table'

    /**
     * 
     */
    init() {
        if (!this.isInitialized) {
            this.addHandlers()
            this.isInitialized = true
        }
    }

    /**
     * 
     */
    addHandlers() {
        const tables = document.querySelectorAll(this.selector)
        tables.forEach((table, index) => {
            this.handleTableScroll(table, index)
        })
    }

    /**
     * 
     */
    handleTableScroll(table, index) {
        const scrollbarDiv = document.createElement('div')
        const scrollbarInnerDiv = document.createElement('div')

        scrollbarDiv.id = `sb-${index}`
        scrollbarDiv.classList.add('table-sticky-scrollbar')
        scrollbarInnerDiv.style.width = `${table.clientWidth}px`

        scrollbarDiv.appendChild(scrollbarInnerDiv)
        const container = table.parentElement
        container.insertAdjacentElement('afterend', scrollbarDiv)

        scrollbarDiv.addEventListener('scroll', function (e) {
            e.target.previousElementSibling.scrollLeft = e.target.scrollLeft
        })
    }
}

export default TableStickyScrollbar
