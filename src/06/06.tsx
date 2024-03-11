import {ChangeEvent, FC, MouseEvent} from "react";

/*const callback = () => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)
*/
type UserType = {
    title: string
}

export const User: FC<UserType> = (props) => {
    const {title, ...restsProps} = props

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        //alert('user have been deleted')

        alert(e.currentTarget.name)
    }
    const saveUser = () => {
        alert('user have been saved')
    }

    const nameChangedHandler = () => {
        console.log('name changed')
    }
    const onBlurHandler = () => {
        console.log('focus lost')
    }
    const onAgeChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + e.currentTarget.value)
    }

    return (
        <div>
            <textarea onChange={nameChangedHandler} onBlur={onBlurHandler}>Alex</textarea>
            <input  onChange={onAgeChangeHandler} type="number"/>
            {title}
            <button name={'delete'} onClick={deleteUser}>delete</button>
            <button name='save' onClick={saveUser}>save</button>
        </div>
    )
}