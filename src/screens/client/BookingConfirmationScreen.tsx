import React from "react";
import Icon from "../../components/Icon";
import { Button } from "../../components/Button";
import { formatDayName, formatTimeForDisplay } from "../../utils/dateFormatter";
import type { Appointment } from "../../types/models";

interface BookingConfirmationScreenProps {
  appointment: Appointment;
  serviceName: string;
  onGoHome: () => void;
}

/**
 * Pantalla de confirmación de reserva — se muestra tras crear una cita
 * exitosamente. Reemplaza al antiguo step 4 de BookAppointmentScreen.
 * Diseño basado en la vista nativa: check verde grande, card de detalles,
 * aviso de puntualidad y botón para volver.
 */
export default function BookingConfirmationScreen({
  appointment,
  serviceName,
  onGoHome,
}: BookingConfirmationScreenProps) {
  return (
    <div className="screen-content">
      <div
        className="flex-col items-center"
        style={{ padding: "32px 20px 40px", textAlign: "center" }}
      >
        {/* Check verde grande */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "var(--slot-free)",
            boxShadow: "0 8px 24px rgba(76,175,80,0.35)",
            marginBottom: 20,
          }}
        >
          <Icon name="check" size={44} style={{ color: "#fff", fontWeight: 700 }} />
        </div>

        {/* Título */}
        <h2
          className="text-headline-sm fw-extrabold"
          style={{ color: "var(--primary)", margin: 0 }}
        >
          ¡Reserva Confirmada!
        </h2>

        {/* Card de detalles */}
        <div
          className="card w-full"
          style={{
            marginTop: 28,
            padding: 24,
            borderRadius: "var(--radius-2xl)",
            background: "var(--surface-variant)",
            boxShadow: "var(--elevation-4)",
            maxWidth: 400,
          }}
        >
          {/* Badge verde */}
          <div className="flex justify-center" style={{ marginBottom: 20 }}>
            <span
              className="text-title-sm fw-extrabold"
              style={{
                background: "var(--slot-free)",
                color: "#fff",
                borderRadius: "var(--radius-lg)",
                padding: "10px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Icon name="check" size={18} style={{ color: "#fff" }} />
              RESERVA CONFIRMADA
            </span>
          </div>

          {/* Detalles */}
          <div className="flex-col" style={{ gap: 10, alignItems: "center" }}>
            <div className="flex items-center gap-2">
              <Icon name="calendar_month" size={22} style={{ color: "var(--error)" }} />
              <span className="text-body-lg">
                {formatDayName(appointment.appointmentDate)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="schedule" size={22} style={{ color: "var(--error)" }} />
              <span className="text-title-lg fw-bold">
                Hora: {formatTimeForDisplay(appointment.appointmentTime)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="content_cut" size={22} style={{ color: "var(--primary)" }} />
              <span className="text-body-lg">
                Servicio: {serviceName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="person" size={22} style={{ color: "var(--on-surface-variant)" }} />
              <span className="text-body-lg">
                Para: {appointment.fullName}
              </span>
            </div>
          </div>

          {/* Separador */}
          <hr
            style={{
              width: "100%",
              margin: "20px 0 14px",
              border: "none",
              borderTop: "1px solid var(--outline-variant)",
            }}
          />

          {/* Aviso */}
          <div className="flex items-start gap-2 justify-center">
            <Icon
              name="warning"
              size={18}
              style={{ color: "var(--slot-occupied)", marginTop: 2, flexShrink: 0 }}
            />
            <p
              className="text-body-md fw-bold"
              style={{ color: "var(--slot-occupied)", margin: 0 }}
            >
              Debes estar 5 minutos antes de tu cita.
            </p>
          </div>
        </div>

        {/* Botón volver al inicio */}
        <div className="w-full" style={{ maxWidth: 400, marginTop: 32 }}>
          <Button full large onClick={onGoHome}>
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
