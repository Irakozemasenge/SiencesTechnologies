import React, { useState } from "react";
import { format } from "date-fns";

function Notifications() {
  // Exemple de données de notifications
  const [notifications] = useState([
    {
      id: 1,
      message: "Nouvelle mise à jour disponible pour l'application.",
      timestamp: new Date("2024-12-01T08:30:00"),
      type: "update", // Type de notification (update, info, warning, error)
    },
    {
      id: 2,
      message: "Vous avez un nouveau message de l'administrateur.",
      timestamp: new Date("2024-12-01T09:00:00"),
      type: "message",
    },
    {
      id: 3,
      message: "Votre paiement a été effectué avec succès.",
      timestamp: new Date("2024-12-01T10:00:00"),
      type: "payment",
    },
    {
      id: 4,
      message: "Problème de connexion détecté. Essayez de vous reconnecter.",
      timestamp: new Date("2024-12-01T11:00:00"),
      type: "error",
    },
    {
      id: 5,
      message: "Vous avez été ajouté à un nouveau groupe.",
      timestamp: new Date("2024-12-01T12:00:00"),
      type: "info",
    },
    {
      id: 6,
      message: "L'application a été mise à jour avec succès.",
      timestamp: new Date("2024-12-02T08:30:00"),
      type: "update",
    },
    {
      id: 7,
      message: "Votre mot de passe a été modifié.",
      timestamp: new Date("2024-12-02T09:15:00"),
      type: "info",
    },
    {
      id: 8,
      message: "Le serveur sera en maintenance de 14h à 16h aujourd'hui.",
      timestamp: new Date("2024-12-02T10:00:00"),
      type: "warning",
    },
    {
      id: 9,
      message: "Une erreur s'est produite lors de la soumission du formulaire.",
      timestamp: new Date("2024-12-02T10:30:00"),
      type: "error",
    },
    {
      id: 10,
      message: "Un nouveau commentaire a été ajouté à votre post.",
      timestamp: new Date("2024-12-02T11:00:00"),
      type: "message",
    },
  ]);

  const renderNotification = (notification) => {
    let notificationStyle = "";
    switch (notification.type) {
      case "update":
        notificationStyle = "bg-blue-100 text-blue-800";
        break;
      case "message":
        notificationStyle = "bg-green-100 text-green-800";
        break;
      case "payment":
        notificationStyle = "bg-yellow-100 text-yellow-800";
        break;
      case "error":
        notificationStyle = "bg-red-100 text-red-800";
        break;
      case "info":
        notificationStyle = "bg-indigo-100 text-indigo-800";
        break;
      case "warning":
        notificationStyle = "bg-orange-100 text-orange-800";
        break;
      default:
        notificationStyle = "bg-gray-100 text-gray-800";
    }

    return (
      <div
        key={notification.id}
        className={`p-4 mb-2 rounded-lg ${notificationStyle} shadow-md`}
      >
        <p>{notification.message}</p>
        <span className="text-sm text-gray-500">
          {format(notification.timestamp, "dd MMM yyyy HH:mm")}
        </span>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Notifications
      </h1>
      <div>
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucune notification pour le moment.
          </p>
        ) : (
          notifications.map(renderNotification)
        )}
      </div>
    </div>
  );
}

export default Notifications;
