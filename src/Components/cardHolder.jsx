import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Input,
} from "@nextui-org/react";

const CardHolder = ({ amount, currency, amountChange }) => {
  return (
    <div>
      {" "}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3 flex items-center justify-center">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Currency Convertor</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex items-center justify-center">
          <Input
            type="number"
            label="Amount"
            placeholder="0.00"
            labelPlacement="outside"
            value={amount}
            onChange={(e) =>
              amountChange && amountChange(Number(e.target.value))
            }
            endContent={
              <div className="flex items-center">
                <span className="text-default-400 text-small">$</span>
                <select className="ml-1 border border-gray-300 rounded-md px-2 py-1">
                  <option value={currency}>{currency}</option>
                </select>
              </div>
            }
          />
        </CardBody>

        <Divider />
        <h3 className="text-center font-bold ">Convert To</h3>
        <div className="flex items-center justify-center mb-5">
          <span className="text-default-400 text-small">$</span>
          <select className="ml-1 border border-gray-300 rounded-md px-2 py-1">
            <option value={currency}>{currency}</option>
          </select>
        </div>
        <Divider />
        <CardBody className="flex items-center justify-center">
          {" "}
          <div className="flex items-center">
            <p>{`${amount} in ${currency} is "this much" in "this currency"`}</p>
          </div>
        </CardBody>

        <Divider />

        <CardFooter className="flex items-center justify-center">
          <Button color="primary" variant="shadow">
            Convert
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardHolder;
