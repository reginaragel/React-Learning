import React from "react";
import { UserContext,ChannelContext } from "../App";

function ComponentF(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                        return(
                        <ChannelContext.Consumer>
                            {
                                channel=>{
                                    return(<div>welcome to {user},again welcome to {channel}</div>)
                                }
                            }
                        </ChannelContext.Consumer>
                        )
                        
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}

export default ComponentF