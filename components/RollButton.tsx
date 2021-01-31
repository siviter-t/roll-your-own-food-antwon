import { useRouter } from "next/router";
import { FC } from "react";
import { Button } from "components/form/Button";

export const RollButton: FC = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.push("/restaurant")}>Roll</Button>
    );
};
