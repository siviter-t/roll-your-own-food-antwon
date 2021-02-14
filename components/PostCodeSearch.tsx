import { FC } from "react";
import { useRecoilState } from "recoil";
import { restaurantPostCodeQueryState } from "atoms/RestaurantPostCodeQueryState";
import { Spinner } from "components/Spinner";
import { Field } from "components/part/Field";
import { TextInput } from "components/form/TextInput";
import { useAreRestaurantsLoading } from "atoms/RestaurantsByPostCodeQuery";
import { isValidishUkPostcode } from "utils/IsValidishUkPostcode";

export const PostCodeSearch: FC = () => {
    const [postCode, setPostCode] = useRecoilState(restaurantPostCodeQueryState);
    const { isLoading } = useAreRestaurantsLoading();
    const isValid = isValidishUkPostcode(postCode);
    const showInvalidation = Boolean(postCode && postCode.length > 5);

    return (
        <Field
            isLoading={isLoading}
            isValid={isValid}
            showValidation={showInvalidation}
            renderInput={showInvalidation => <TextInput
                showInvalidation={showInvalidation}
                value={postCode || ""}
                onChange={event => setPostCode(event.target.value)}
                placeholder={"enter a postcode"}
            />}
            renderLoading={<Spinner />}
            renderValidation={null}
        />

    );
};
