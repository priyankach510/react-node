import React from 'react'

export const DisplayBoard = ({numberOfVotes, getAllVotes}) => {
    
    return(
        <div className="display-board">
            <h4>Votes Recorded</h4>
            <div className="number">
            {numberOfVotes}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllVotes()} className="btn btn-warning">Get all Votes</button>
            </div>
        </div>
    )
}