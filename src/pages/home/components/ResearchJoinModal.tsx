import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResearchJoinModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    position: '',
    memberType: 'regular',
    reason: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 제출 시뮬레이션
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      position: '',
      memberType: 'regular',
      reason: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-background-50 border border-background-200/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-background-100 flex items-center justify-between bg-primary-50/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
              <i className="ri-user-add-line text-lg"></i>
            </div>
            <div>
              <span className="text-[10px] font-medium text-accent-600 uppercase tracking-widest block">
                Join Us
              </span>
              <h3 className="text-base font-bold text-foreground-800">연구회원 가입 신청</h3>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-foreground-400 hover:text-foreground-700 hover:bg-background-200/50 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Modal Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-foreground-400 leading-relaxed -mt-1 mb-2">
              인적자원개발연구협회의 연구회원이 되시면 논문 전문, 연구보고서, 칼럼 등 모든 학술 자료를 자유롭게 열람하실 수 있습니다.
            </p>

            {/* 성함 */}
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1">
                성함 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="홍길동"
                className="w-full px-3.5 py-2 text-xs bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-background-50 text-foreground-800 placeholder:text-foreground-300 transition-all"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1">
                이메일 주소 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@domain.com"
                className="w-full px-3.5 py-2 text-xs bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-background-50 text-foreground-800 placeholder:text-foreground-300 transition-all"
              />
            </div>

            {/* 소속기관 & 직위 */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-foreground-700 mb-1">
                  소속 기관 / 대학
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="OO대학교 / OO기업"
                  className="w-full px-3.5 py-2 text-xs bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-background-50 text-foreground-800 placeholder:text-foreground-300 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground-700 mb-1">
                  직위 / 신분
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="연구원, 대학원생 등"
                  className="w-full px-3.5 py-2 text-xs bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-background-50 text-foreground-800 placeholder:text-foreground-300 transition-all"
                />
              </div>
            </div>

            {/* 회원 구분 */}
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1">
                신청 회원 구분
              </label>
              <select
                value={formData.memberType}
                onChange={(e) => setFormData({ ...formData, memberType: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-background-50 text-foreground-800 transition-all cursor-pointer"
              >
                <option value="regular">정회원 (학술 연구 참여 및 논문/보고서 전문 열람)</option>
                <option value="general">일반회원 (논문 요약 및 소식지 수신)</option>
              </select>
            </div>

            {/* 동기 및 연구분야 */}
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1">
                신청 동기 및 주요 연구 관심 분야
              </label>
              <textarea
                rows={3}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="간단한 가입 목적이나 관심 학술 분야를 적어주세요."
                className="w-full px-3.5 py-2 text-xs bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-background-50 text-foreground-800 placeholder:text-foreground-300 transition-all resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-medium text-foreground-500 hover:text-foreground-800 hover:bg-background-100 rounded-lg transition-colors cursor-pointer"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    제출 중...
                  </>
                ) : (
                  '신청서 제출하기'
                )}
              </button>
            </div>
          </form>
        ) : (
          /* 신청 완료 안내 */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              <i className="ri-checkbox-circle-line"></i>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary-600">가입 신청이 완료되었습니다</h4>
              <p className="text-xs text-foreground-500 mt-2 leading-relaxed">
                연구회원 신청이 성공적으로 접수되었습니다.<br />
                담당자 확인 및 검토 후 작성해주신 이메일로 안내해 드리겠습니다.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}