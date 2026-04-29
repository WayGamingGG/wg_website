import{c as T,K as v,G as P}from"./index-DcuS5Cmh.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=T("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=T("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),E=n=>{let a;const t=new Set,e=(i,y)=>{const h=typeof i=="function"?i(a):i;if(!Object.is(h,a)){const p=a;a=y??(typeof h!="object"||h===null)?h:Object.assign({},a,h),t.forEach(m=>m(a,p))}},o=()=>a,u={setState:e,getState:o,getInitialState:()=>d,subscribe:i=>(t.add(i),()=>t.delete(i))},d=a=n(e,o,u);return u},w=n=>n?E(n):E,k=n=>n;function H(n,a=k){const t=v.useSyncExternalStore(n.subscribe,v.useCallback(()=>a(n.getState()),[n,a]),v.useCallback(()=>a(n.getInitialState()),[n,a]));return v.useDebugValue(t),t}const U=n=>{const a=w(n),t=e=>H(a,e);return Object.assign(t,a),t},q=n=>U;function b(n,a){let t;try{t=n()}catch{return}return{getItem:o=>{var r;const f=d=>d===null?null:JSON.parse(d,void 0),u=(r=t.getItem(o))!=null?r:null;return u instanceof Promise?u.then(f):f(u)},setItem:(o,r)=>t.setItem(o,JSON.stringify(r,void 0)),removeItem:o=>t.removeItem(o)}}const C=n=>a=>{try{const t=n(a);return t instanceof Promise?t:{then(e){return C(e)(t)},catch(e){return this}}}catch(t){return{then(e){return this},catch(e){return C(e)(t)}}}},F=(n,a)=>(t,e,o)=>{let r={storage:b(()=>localStorage),partialize:s=>s,version:0,merge:(s,S)=>({...S,...s}),...a},f=!1;const u=new Set,d=new Set;let i=r.storage;if(!i)return n((...s)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),t(...s)},e,o);const y=()=>{const s=r.partialize({...e()});return i.setItem(r.name,{state:s,version:r.version})},h=o.setState;o.setState=(s,S)=>(h(s,S),y());const p=n((...s)=>(t(...s),y()),e,o);o.getInitialState=()=>p;let m;const R=()=>{var s,S;if(!i)return;f=!1,u.forEach(c=>{var l;return c((l=e())!=null?l:p)});const g=((S=r.onRehydrateStorage)==null?void 0:S.call(r,(s=e())!=null?s:p))||void 0;return C(i.getItem.bind(i))(r.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==r.version){if(r.migrate){const l=r.migrate(c.state,c.version);return l instanceof Promise?l.then(I=>[!0,I]):[!0,l]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,c.state];return[!1,void 0]}).then(c=>{var l;const[I,_]=c;if(m=r.merge(_,(l=e())!=null?l:p),t(m,!0),I)return y()}).then(()=>{g==null||g(m,void 0),m=e(),f=!0,d.forEach(c=>c(m))}).catch(c=>{g==null||g(void 0,c)})};return o.persist={setOptions:s=>{r={...r,...s},s.storage&&(i=s.storage)},clearStorage:()=>{i==null||i.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>R(),hasHydrated:()=>f,onHydrate:s=>(u.add(s),()=>{u.delete(s)}),onFinishHydration:s=>(d.add(s),()=>{d.delete(s)})},r.skipHydration||R(),m||p},N=F,$="2025-07",L="lovable-project-5cwog.myshopify.com",j=`https://${L}/api/${$}/graphql.json`,A="09f395f91fabc8f59204c814936d542a";async function O(n,a={}){const t=await fetch(j,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":A},body:JSON.stringify({query:n,variables:a})});if(t.status===402)return P.error("Shopify: Payment required",{description:"Shopify API access requires an active Shopify billing plan. Visit https://admin.shopify.com to upgrade."}),null;if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();if(e.errors)throw new Error(`Error calling Shopify: ${e.errors.map(o=>o.message).join(", ")}`);return e}const x=`
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`,Y=`
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`,B=`
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;async function G(n=20,a){var e,o;const t=await O(x,{first:n,query:a});return t?((o=(e=t.data)==null?void 0:e.products)==null?void 0:o.edges)||[]:[]}async function K(n){var t;const a=await O(Y,{handle:n});return a&&((t=a.data)==null?void 0:t.productByHandle)||null}async function D(n){const a=n.map(r=>({quantity:r.quantity,merchandiseId:r.variantId})),t=await O(B,{input:{lines:a}});if(!t)throw new Error("Failed to create cart");if(t.data.cartCreate.userErrors.length>0)throw new Error(`Cart creation failed: ${t.data.cartCreate.userErrors.map(r=>r.message).join(", ")}`);const e=t.data.cartCreate.cart;if(!e.checkoutUrl)throw new Error("No checkout URL returned from Shopify");const o=new URL(e.checkoutUrl);return o.searchParams.set("channel","online_store"),o.toString()}const V=q()(N((n,a)=>({items:[],cartId:null,checkoutUrl:null,isLoading:!1,addItem:t=>{const{items:e}=a(),o=e.find(r=>r.variantId===t.variantId);n(o?{items:e.map(r=>r.variantId===t.variantId?{...r,quantity:r.quantity+t.quantity}:r)}:{items:[...e,t]})},updateQuantity:(t,e)=>{if(e<=0){a().removeItem(t);return}n({items:a().items.map(o=>o.variantId===t?{...o,quantity:e}:o)})},removeItem:t=>{n({items:a().items.filter(e=>e.variantId!==t)})},clearCart:()=>{n({items:[],cartId:null,checkoutUrl:null})},setCartId:t=>n({cartId:t}),setCheckoutUrl:t=>n({checkoutUrl:t}),setLoading:t=>n({isLoading:t}),createCheckout:async()=>{const{items:t,setLoading:e,setCheckoutUrl:o}=a();if(t.length!==0){e(!0);try{const r=await D(t);o(r)}catch(r){throw console.error("Failed to create checkout:",r),r}finally{e(!1)}}},getTotalItems:()=>a().items.reduce((t,e)=>t+e.quantity,0),getTotalPrice:()=>a().items.reduce((t,e)=>t+parseFloat(e.price.amount)*e.quantity,0)}),{name:"nexusgg-cart",storage:b(()=>localStorage)}));export{J as L,Q as S,K as a,G as f,V as u};
