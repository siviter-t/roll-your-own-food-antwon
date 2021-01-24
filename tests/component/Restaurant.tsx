import { ComponentProps } from "react";
import { render } from '@testing-library/react';
import { Restaurant } from "components/Restaurant";

function testRenderComponent(props: ComponentProps<typeof Restaurant>) {
    return render(<Restaurant {...props} />);
}

describe("Restaurant", () => {
    it("can render", () => {
        const { queryByText } = testRenderComponent({
            name: "testName",
            description: "testDescription"
        });

        expect(queryByText(/testName/)).toBeTruthy();
        expect(queryByText(/testDescription/)).toBeTruthy();
    });
});
