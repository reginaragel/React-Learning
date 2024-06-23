import React from "react";

function ChildTwo(){

    console.log('Child Render');
    return(
        <div>
            Child Component

        </div>
    )
}

export default ChildTwo

export const MemoizedChildTwo=React.memo(ChildTwo)