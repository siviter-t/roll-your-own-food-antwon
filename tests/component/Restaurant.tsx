import { ComponentProps } from "react";
import { render } from '@testing-library/react';
import { RestaurantTile } from "components/RestaurantTile";

function testRenderComponent(props: ComponentProps<typeof RestaurantTile>) {
    return render(<RestaurantTile {...props} />);
}

describe("RestaurantTile", () => {
    it("can render", () => {
        const { queryByText } = testRenderComponent({
            name: "testName",
            logoUrl: "/test.png"
        });

        expect(queryByText(/testName/)).toBeTruthy();
    });
});
