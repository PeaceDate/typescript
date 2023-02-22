enum Delivery {
    HOME = 'home',
    POINT = 'point'
}

interface IProductProp {
    id: number;
    price: number;
    name: string;
}
interface IProducts {
    product: IProductProp[];
}

interface DeliveryToHome {
    date: Date;
    adress: string;
}

interface DeliveryToPoint {
    date: Date;
    shopId: number
}

interface IDelivery extends DeliveryToHome, DeliveryToPoint {}

class Cart implements IProducts, IDelivery{
    private _id: number = 0;
    private products: IProductProp[] = [];
    private date: Date;
    private adress: string;
    private shopId: number;

    private _genareteId(): number {
        return this._id++;
    }

    private _generatePrice(): number {
        return Math.round(Math.random() * 1000);
    }

    public addProduct(product: string): void;
    public addProduct(products:string[]): void;
    public addProduct(productOrProducts: string | string[]): void {
        if (typeof productOrProducts === 'string') {
            this.products.push({
                id: this._genareteId(),
                price: this._generatePrice(),
                name: productOrProducts
            })
        } else {
            productOrProducts.forEach((product) => {
                this.products.push({
                    id: this._genareteId(),
                    price: this._generatePrice(),
                    name: product
                })
            })
        }
    }

    public deleteProductById(id: number): void {
        this.products = this.products.filter((product: IProductProp) => product.id !== id);
    }

    public countPrice(): number {
        return this.products.reduce((acc, item: IProductProp) => acc + item.price, 0)
    }

    public addDelivery({
        delivery,
        adress,
        date,
        shopId
    }: {
        delivery: Delivery,
        adress?: string,
        date?: string,
        shopId?: number
    }): void {
        if (delivery == Delivery.HOME) {
            if (date && adress) {
                this.date = new Date(date)
                this.adress = adress
            }
        }
        if(shopId) {
            this.date = new Date;
            this.shopId = shopId
        }


    }

    public checkout(): string {
        if (this.products.length > 0 && this.date && (this.shopId || this.adress)) {
            return 'All OK 👌'
        }

        return 'Checkout Failed ❌'
    }

}

const cart = new Cart()
console.log(cart)
cart.addProduct('Chesse')
console.log(cart)
cart.addProduct(['Milk', 'Bread', 'Butter'])
console.log(cart)
cart.deleteProductById(1)
console.log(cart)
console.log(cart.countPrice())
cart.addDelivery({
    delivery: Delivery.POINT,
    shopId: 5
})
console.log(cart)
console.log(cart.checkout())





