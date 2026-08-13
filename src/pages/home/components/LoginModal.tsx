import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 무조건 로그인 불가 안내
    setErrorMessage('현재 시스템 점검 중이거나 등록되지 않은 계정입니다. 로그인 기능을 이용할 수 없습니다.');
  };

  const handleClose = () => {
    setErrorMessage('');
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-background-50 border border-background-200/80 rounded-2xl p-6 md:p-8 shadow-xl">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-foreground-400 hover:text-foreground-800 transition-colors"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest block mb-1">
            Member Access
          </span>
          <h3 className="text-xl font-bold text-primary-600">로그인</h3>
          <p className="text-xs text-foreground-400 mt-1">
            한국인적자원개발원 연구원 전용 서비스입니다.
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-600 leading-relaxed flex items-start gap-2">
            <i className="ri-error-warning-line text-sm mt-0.5 shrink-0"></i>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-foreground-700 mb-1">
              아이디 (이메일)
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="id@hrdi.or.kr"
              className="w-full px-3.5 py-2.5 text-sm bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 text-foreground-800 placeholder:text-foreground-300 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground-700 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-sm bg-background-100 border border-background-200/80 rounded-lg focus:outline-none focus:border-primary-500 text-foreground-800 placeholder:text-foreground-300 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}