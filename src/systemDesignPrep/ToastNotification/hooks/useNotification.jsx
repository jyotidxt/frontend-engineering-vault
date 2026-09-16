//  to trigger notification everytime buttton clciked 

import { useState } from "react";
import Notification from "../components/Notifiaction";


const positionClasses = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
};

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (toast) => {
    const id = Date.now() + Math.random();

    setNotifications((prev) => [...prev, { ...toast, id }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, toast.duration || 3000);
  };
const NotificationComponent = (
  <div
    className="
      fixed z-50 flex flex-col gap-3 pointer-events-none

      bottom-5 left-1/2 -translate-x-1/2 w-[90%]
      md:w-auto md:left-auto md:translate-x-0
      md:top-5 md:right-5 md:bottom-auto
    "
  >
    {notifications.map((item) => (
      <div key={item.id} className="pointer-events-auto">
        <Notification
          {...item}
          onClose={() =>
            setNotifications((prev) =>
              prev.filter((n) => n.id !== item.id)
            )
          }
        />
      </div>
    ))}
  </div>
);

  return [NotificationComponent, triggerNotification];
};

export default useNotification;

// // to trigger only 1 time

// import Notification from "../components/Notifiaction";
// import { useState } from "react";

// const positionClasses = {
//   "top-right": "top-5 right-1",
//   "top-left": "top-5 left-5",
//   "bottom-right": "bottom-5 right-5",
//   "bottom-left": "bottom-5 left-5",
// };

// const useNotification = (position = "top-right") => {
//   const [notification, setNotification] = useState(null);

//   const triggerNotification = (props) => {
//     setNotification(props);

//     setTimeout(() => {
//       setNotification(null);
//     }, props.duration || 5000);
//   };

//   const NotificationComponent = notification ? (
//     <div className={`fixed z-50 ${positionClasses[position]}`}>
//       <Notification
//         {...notification}
//         onClose={() => setNotification(null)}
//       />
//     </div>
//   ) : null;

//   return [NotificationComponent, triggerNotification];
// };

// export default useNotification;