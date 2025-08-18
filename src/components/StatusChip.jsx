import React from "react";

const StatusChip = ({ status }) => {
    return <div className={`rounded-lg ${status == "Done" ? 'bg-green-300' : 'bg-purple-300'}`}>
            <p className={`${status == "Done" ? 'text-green-950' : 'text-purple-950'} pl-1.5 pr-1.5`}>
                {status}
            </p>
        </div>
}

export default StatusChip