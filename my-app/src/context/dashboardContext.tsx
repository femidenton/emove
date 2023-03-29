import { createContext, useState } from "react";




// Create the context object
export const ModalContext = createContext({})

// // Define the type for the ModalState props
// type ScreenContextProviderProps = {
//   children: React.ReactNode;
// };



// const ModalState: React.FC<ScreenContextProviderProps> = ({ children }) => {


//      const [state, setState] = useState({
//         editAndDeleteModal: false,
//         editPriceModal: false,
//         profileModal: false,
//     })




//   // Return the provider with the current screen state and the changeScreen function
//   return (
//     <ModalContext.Provider value={{ ...state, setState }}>
//      {children}
//     </ModalContext.Provider>
//   );
// };


// export default ModalState;
