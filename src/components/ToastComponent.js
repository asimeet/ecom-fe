import { ToastContainer} from 'react-toastify';

const ToastComponent = () => {
    return(
        <ToastContainer
            position="top-center"
            autoClose={1700}    
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover/>
    );
}

export default ToastComponent;