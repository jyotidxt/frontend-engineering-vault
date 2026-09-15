import {
  CircleCheckBig,
  Info,
  TriangleAlert,
  CircleQuestionMark,
  CircleX,
} from "lucide-react";

const icons = {
  success: <CircleCheckBig />,
  info: <Info />,
  warning: <TriangleAlert />,
  error: <CircleQuestionMark />,
};

const styles = {
  success: "bg-green-600 border-green-400",
  info: "bg-blue-600 border-blue-400",
  warning: "bg-yellow-500 border-yellow-300 text-black",
  error: "bg-red-600 border-red-400",
};

const Notification = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div
      className={`flex items-center gap-3 min-w-[320px] max-w-sm rounded-xl border px-4 py-3 shadow-xl text-white animate-in slide-in-from-top duration-300 ${styles[type]}`}
    >
      <span>{icons[type]}</span>

      <p className="flex-1 text-sm font-medium">{message}</p>

      <CircleX
        size={18}
        onClick={onClose}
        className="cursor-pointer hover:opacity-70"
      />
    </div>
  );
};

export default Notification;


// import { CircleCheckBig  , Info , TriangleAlert , CircleQuestionMark  , CircleX } from 'lucide-react';
// const icons = {
//     success:<CircleCheckBig  />,
//      info:<Info />,
//       warning:<TriangleAlert />,
//        error:<CircleQuestionMark   />
// }
// const Notification = ({ type = "info", message, onClose = ()=> {} }) => {
//   return (
//     <div className={`notification ${type} `}
//   >
//       {/* icons */}
//       <span className="text-xl">{icons[type]}</span>

//       {/* message */}
//       <p className="flex-1 text-sm font-medium">{message}</p>

//       {/* close button */}
//       <CircleX
//         color="white"
//         onClick={() => onClose()}
//         className="cursor-pointer hover:opacity-70 transition-opacity"
//       />
//     </div>
//   );
// };

// export default Notification;
// const Notification = ({type ="info", message , onClose}) =>{
//     return (
// <>
//     {/* icons  */}
// {icons[type]}
//      {/* message */}
// {message}
//      {/* close button  */}
//    <CircleX color="white" onClick={()=> onClose()}/>
// </>
//     )
// }

// export default Notification;