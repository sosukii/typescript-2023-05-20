// import "reflect-metadata";

export class TestService {
  //   @LogPerformance()
  calculate() {
    // Logic
  }
}

// function LogPerformance() {
//   return (
//     target: Object,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     const method = descriptor.value;
//     descriptor.value = function (...args: Parameters<typeof method>) {
//       console.time(propertyName);
//       const result = method.apply(this, ...args);
//       console.timeEnd(propertyName);

//       return result;
//     };
//   };
// }

// @Service({
//   isSingleton: true,
// })
// class CustomService {}

// interface ServiceMetadata {
//   isSingleton: boolean;
// }

// const serviceMetaKey = "serviceMetaKey";

// type Constructor = new (...args: any[]) => {};

// function Service(metadata: ServiceMetadata) {
//   return function (service: Constructor) {
//     Reflect.defineMetadata(serviceMetaKey, metadata, service);
//   };
// }

// function isServiceMetadata(metadata: unknown): metadata is ServiceMetadata {
//   const serviceMetadata = metadata as ServiceMetadata | undefined;

//   return typeof serviceMetadata?.isSingleton === "boolean";
// }

// const instanceMap = new Map();

// function createInstance(Service: Constructor) {
//   let metadata = Reflect.getMetadata(serviceMetaKey, Service);

//   if (isServiceMetadata(metadata) && metadata.isSingleton) {
//     if (!instanceMap.has(Service)) {
//       instanceMap.set(Service, new Service());
//     }

//     return instanceMap.get(Service);
//   }

//   return new Service();
// }

// createInstance(CustomService);

// class Dog {
//   @Condition({ min: 10, max: 15 })
//   weight: number;
// }

// interface ConditionParam {
//   min: number;
//   max: number;
// }

// const conditionKey = "conditionKey";

// function Condition(metadata: ConditionParam) {
//   return function (object: Object, propertyName: string) {
//     Reflect.defineMetadata(
//       conditionKey + propertyName,
//       metadata,
//       object.constructor
//     );
//   };
// }

// function validate<Entity extends Object>(entity: Entity) {
//   const properties = Object.getOwnPropertyNames(entity);

//   properties.forEach((propertyName) => {
//     let metadata = Reflect.getMetadata(
//       conditionKey + propertyName,
//       entity.constructor
//     );
//   });
// }
