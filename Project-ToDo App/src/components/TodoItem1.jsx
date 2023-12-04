import React from 'react'

function TodoItem1() {
    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023'
    return (
        <div>
            <div class="row">
                <div class="col-4">
                    {todoName}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger kg-button">Danger</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem1