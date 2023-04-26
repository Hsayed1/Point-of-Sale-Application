import React from "react";
import { InputHTMLAttributes, FC } from "react";

import { Button } from "@blueprintjs/core";

type FromInputProps = { label: string } &
  InputHTMLAttributes<HTMLInputElement>;

const SquareOAuth: FC = () => {
  return (
    <div className="group">
        <a href="https://connect.squareupsandbox.com/oauth2/authorize?client_id=sandbox-sq0idb-JkhPNfNI3cDyvFKmPYTbZA&scope=CUSTOMERS_READ+DEVICE_CREDENTIAL_MANAGEMENT+ITEMS_READ+ORDERS_READ+ORDERS_WRITE+PAYMENTS_READ+APPOINTMENTS_READ+APPOINTMENTS_WRITE+INVOICES_READ+INVOICES_WRITE">
        OAuth with Square
        </a>
    </div>
  );
}

export default SquareOAuth;
