import ReactReconciler from "react-reconciler";

const hostConfig = {
  supportsMutation: true,
  createInstance: (
    type,
    props,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    const domElement = document.createElement(type);
    if (props.სტილები) {
      domElement.className = props.სტილები;
    }
    if (props.სორსი) {
      domElement.src = props.სორსი;
    }
    if (props.ფონი) {
      domElement.style.backgroundColor = props.სორსი;
    }
    if (props.onClick) {
      domElement.addEventListener("click", props.onClick);
    }
    return domElement;
  },
  createTextInstance: (text) => {
    return document.createTextNode(text);
  },
  appendChildToContainer: (parent, child) => {
    parent.appendChild(child);
  },
  appendInitialChild: (parent, child) => {
    parent.appendChild(child);
  },
  appendChild(parent, child) {
    parent.appendChild(child);
  },
  removeChildFromContainer(container, child) {
    // container.removeChild(child);
  },
  removeChild(parent, child) {
    // parent.removeChild(child);
  },
  insertInContainerBefore(container, child, before) {
    // container.insertBefore(child, before);
  },
  insertBefore(parent, child, before) {
    // parent.insertBefore(child, before);
  },
  prepareUpdate(domElement, type, oldProps, newProps, root, host) {
    const res = {};
    if (oldProps.ფონი !== newProps.ფონი) {
      //ანუ აახალი ფონი
      res["ააფონი"] = newProps.ფონი;
    }
    if (oldProps.სორსი !== newProps.სორსი) {
      //ანუ აახალი სორსი
      res["ასორსი"] = newProps.სორსი;
    }
    return res;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    if (updatePayload.ააფონი) {
      domElement.style.backgroundColor = updatePayload.ააფონი;
    }
    if (updatePayload.ასორსი) {
      domElement.src = updatePayload.ასორსი;
    }
  },
  finalizeInitialChildren: (domElement, type, props) => {},
  commitTextUpdate(textInstance, oldText, newText) {},
  getRootHostContext: () => {},
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {},
  shouldSetTextContent: (type, props) => {},
};

const reconciler = ReactReconciler(hostConfig);

export const MySuperRender = (reactElement, rootDiv) => {
  //შევქმნათ საწყისი კონტეინერი
  const container = reconciler.createContainer(rootDiv, false, false);
  //დავააფდეითოთ საჭიროების შემთხევაში
  reconciler.updateContainer(reactElement, container, null);
};
