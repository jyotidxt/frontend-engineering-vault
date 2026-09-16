import useNotification from "./hooks/useNotification"

export default function Toast() {
  const [NotificationComponent, triggerNotification] =
    useNotification("top-right");

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold">Toast Notifications</h1>

      <button
        className="rounded-lg bg-green-600 px-4 py-2 text-white"
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "File Sent Successfully",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>

      <button
        className="rounded-lg bg-red-600 px-4 py-2 text-white"
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "File Sent Failed",
            duration: 3000,
          })
        }
      >
        Trigger Error
      </button>

      <button
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        onClick={() =>
          triggerNotification({
            type: "info",
            message: "File Information",
            duration: 3000,
          })
        }
      >
        Trigger Info
      </button>

      <button
        className="rounded-lg bg-yellow-500 px-4 py-2 text-black"
        onClick={() =>
          triggerNotification({
            type: "warning",
            message: "File Warning",
            duration: 3000,
          })
        }
      >
        Trigger Warning
      </button>

      {NotificationComponent}
    </div>
  );
}