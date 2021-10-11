
export const handleSize = (e:any,setSize:React.Dispatch<React.SetStateAction<string>>) => {
    let btns = document.querySelectorAll(`.${e.target.classList}`)
    btns.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
    setSize(e.target.id)
}