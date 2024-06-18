export const deposit =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: 'deposit',
            payload:amount
        })
    }
}