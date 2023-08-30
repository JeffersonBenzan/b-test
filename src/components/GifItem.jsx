export const GifItem = ({  url, onClick }) => {
    const onClickHandler = () => {
        onClick();
    }
    return (
        <div className="card item animate__animated animate__fadeIn">
            <img src={url} onClick={onClickHandler}/>
        </div>
    );
}