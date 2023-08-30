export const Modal = ({ children, onClose, show }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal" id="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
}