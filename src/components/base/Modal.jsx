import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { useUpdateEffect } from 'react-use';
import anime from 'animejs';

// Component
import XMarkButtonIcon from '../shared/buttons/ModalCloseButton';

const Modal = ({
  mainContentWrapperClassName,
  shouldShow,
  children,
  onClickCloseModal,
}) => {
  const rootWrapper = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef('');

  const animateModal = () => {
    if (shouldShow) {
      document.body.style.overflowY = 'hidden';
      // To make sure that elements will be animatable
      Object.assign(bgRef.current.style, {
        opacity: 0,
      });

      Object.assign(rootWrapper.current.style, {
        display: 'block',
      });

      Object.assign(contentRef.current.style, {
        opacity: 0,
        transform: 'translateY(30px)',
      });

      // Animate bg
      anime({
        targets: bgRef.current,
        opacity: 0.8,
        easing: 'linear',
        duration: 150,
      });

      // Animate content wrapper
      anime({
        targets: contentRef.current,
        translateY: 0,
        opacity: 1,
        easing: 'easeOutCubic',
        duration: 450,
      });
    } else {
      document.body.style.overflowY = null;

      // Animate bg
      anime({
        targets: bgRef.current,
        opacity: 0,
        easing: 'linear',
        duration: 150,
      });

      // Animate content wrapper
      anime({
        targets: contentRef.current,
        translateY: 30,
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 350,
        complete: () => {
          // Reset styles to back to initial state
          bgRef.current.style = null;
          rootWrapper.current.style = null;
        },
      });
    }
  };

  useUpdateEffect(() => {
    animateModal();
  }, [shouldShow]);

  return createPortal(
    <div
      className="fixed left-0 top-0 hidden h-screen w-screen"
      ref={rootWrapper}
    >
      {/* Background */}
      <span
        className="absolute left-0 top-0 block h-screen w-full bg-primary-900 opacity-0"
        ref={bgRef}
      ></span>

      {/* Parent Content Wrapper */}
      <div className="absolute flex h-screen w-full items-center justify-center overflow-y-scroll">
        {/* Main Content Wrapper */}
        <div
          className={`my-auto rounded-lg relative bg-white p-4 ${mainContentWrapperClassName}`}
          ref={contentRef}
        >
          <div className="mb-2 flex justify-end">
            <XMarkButtonIcon
              className="right-5 top-5"
              onClick={onClickCloseModal}
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
