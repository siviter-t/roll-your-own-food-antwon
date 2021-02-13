import { FC } from "react";
import { useRecoilState } from "recoil";
import { restaurantPostCodeQueryState } from "atoms/RestaurantPostCodeQueryState";
import { TextInput } from "components/form/TextInput";

export const PostCodeSearch: FC = () => {
    const [postCode, setPostCode] = useRecoilState(restaurantPostCodeQueryState);
    return (
        <TextInput
            value={postCode || ""}
            onChange={event => setPostCode(event.target.value)}
            placeholder={"enter a postcode"}
        />
    );
};
