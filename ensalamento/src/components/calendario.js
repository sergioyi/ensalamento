import style from './calendario.module.css'
function Calendario(){
    return(
        <>
        <h1>Calendario</h1>
        <table>
            <tr><th>seg</th><th>ter</th><th>qua</th><th>qui</th><th>sex</th><th>sáb</th><th>dom</th></tr>
            <tbody>
                <tr><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td></tr>
                <tr><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td></tr>
                <tr><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td></tr>
                <tr><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td><td className={style.td}> </td></tr>
            </tbody>
        </table>
        </>
    );
}
export default Calendario; 