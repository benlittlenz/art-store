import { useContext } from "react";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";
import { ProductCart } from "./Product";
import { CartContext } from "../../context/shopContext";
import { OrderTotal } from "./OrderTotal";

const DrawerWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: ${(props) => (!props.open ? "translateX(100%)" : null)};
  width: 100%;
  z-index: 10;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;

const DrawerOverlay = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.open ? null : "none")};
`;

const DrawerContentWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 2.5rem;
  max-width: 100%;
  transition: all 0.2s ease-in-out;
`;

const WidthWrapper = styled.div`
  width: 100vw;
  max-width: 26rem;
`;

const DrawerBody = styled.div`
  overflow-y: auto;
  padding: 1.5rem 1rem;
  flex: 1 1 0%;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const DrawerContent = styled.div`
  display: flex;
  overflow-y: scroll;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const DrawerHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
`;

const DrawerClose = styled.div`
  display: flex;
  margin-left: 0.75rem;
  align-items: center;

  button {
    padding: 0.5rem;
    margin: -0.5rem;
    background: transparent;
    border: none;
  }
`;

const CloseIcon = styled(XIcon)`
  width: 20px;
  height: 20px;
  color: #1f2937;
  cursor: pointer;

  &:hover {
    color: #6b7280;
  }
  // margin-right: 4px;
`;

const CartWrapper = styled.div`
  margin-top: 2rem;
`;

export function Drawer() {
  const { cart, cartDrawerOpen, setCartDrawerOpen } = useContext(CartContext);
  return (
    <DrawerWrapper open={cartDrawerOpen}>
      <DrawerOverlay open={cartDrawerOpen}>
        <DrawerContentWrapper>
          <WidthWrapper>
            <DrawerContent>
              <DrawerBody>
                <DrawerHeading>
                  <h1>Shopping Cart</h1>
                  <DrawerClose>
                    <button
                      type="button"
                      onClick={() => setCartDrawerOpen(false)}
                    >
                      <CloseIcon />
                    </button>
                  </DrawerClose>
                </DrawerHeading>
                <CartWrapper>
                  <ProductCart cart={cart} />
                </CartWrapper>
              </DrawerBody>
              {/* Footer sub total */}
              <OrderTotal setCartDrawerOpen={setCartDrawerOpen} />
            </DrawerContent>
          </WidthWrapper>
        </DrawerContentWrapper>
      </DrawerOverlay>
    </DrawerWrapper>
  );
}
