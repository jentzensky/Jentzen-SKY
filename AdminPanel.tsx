import React, { useState } from 'react';
import { Settings, X, Image as ImageIcon, Type, Search, Lock, Share2, Upload, Trash2, Video, Plus, RotateCcw, Download, Copy, Check } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const AdminPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'seo' | 'hero' | 'cases' | 'partners' | 'portfolio'>('seo');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // New Partner State (Quick Add)
  const [newPartnerName, setNewPartnerName] = useState('');
  const [newPartnerLogo, setNewPartnerLogo] = useState<string | undefined>(undefined);

  // New Portfolio State
  const [newWorkTitle, setNewWorkTitle] = useState('');
  const [newWorkType, setNewWorkType] = useState<'image' | 'video'>('image');
  const [newWorkFile, setNewWorkFile] = useState<string | undefined>(undefined);

  const { content, updateSEO, updateHero, updateCase, updatePartner, addPartner, removePartner, addPortfolioItem, removePortfolioItem, resetContent } = useContent();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'jentzen' && password === 'admin888') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('ID 或 Password 错误！');
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied! 现在可以 Share 给客户了。");
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert("文件过大 (Max 2MB)！建议压缩图片后再上传。");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPartner = () => {
    if (newPartnerName) {
      addPartner(newPartnerName, newPartnerLogo);
      setNewPartnerName('');
      setNewPartnerLogo(undefined);
    }
  };

  const handleAddWork = () => {
    if (newWorkTitle && newWorkFile) {
      addPortfolioItem({
        id: Date.now().toString(),
        title: newWorkTitle,
        type: newWorkType,
        url: newWorkFile,
        category: newWorkType === 'image' ? 'Graphic' : 'Video'
      });
      setNewWorkTitle('');
      setNewWorkFile(undefined);
      alert("作品上传成功！");
    } else {
      alert("请填写标题并上传文件");
    }
  };

  const copyExportCode = () => {
    const code = `const defaultContent: SiteContent = ${JSON.stringify(content, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-4 z-50 bg-black/80 text-brandOrange p-3 rounded-full border border-brandOrange shadow-glow-orange hover:bg-black transition-all group"
        title="网站内容设置"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
      </button>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in">
        <div className="bg-cyberGray p-8 rounded-2xl border border-brandOrange/30 shadow-2xl w-full max-w-sm relative">
           <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <X />
          </button>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brandOrange/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brandOrange/30">
              <Lock className="text-brandOrange w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">Admin Login</h2>
            <p className="text-gray-400 text-sm">请输入你的 ID 和 Password</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="ID (jentzen)" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-brandOrange outline-none"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password (admin888)" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-brandOrange outline-none"
              />
            </div>
            {loginError && <p className="text-red-500 text-sm text-center font-bold">{loginError}</p>}
            <button type="submit" className="w-full bg-brandOrange text-white font-bold py-3 rounded-lg hover:bg-brandOrange/90 transition-colors shadow-glow-orange">
              登入 Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Export Modal
  if (showExport) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur p-4">
        <div className="bg-cyberGray p-6 rounded-xl border border-brandOrange w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Download className="text-brandOrange" /> Export Data for GitHub
            </h3>
            <button onClick={() => setShowExport(false)} className="text-gray-400 hover:text-white"><X /></button>
          </div>
          
          <div className="bg-brandOrange/10 border border-brandOrange/20 p-4 rounded-lg mb-4">
             <h4 className="font-bold text-brandOrange mb-1">如何永久保存修改？</h4>
             <p className="text-gray-300 text-sm">
                因为网站运行在浏览器中，您刚上传的照片只保存在本地。要将其搬进 GitHub：
                <br/>
                1. 点击下方的 <b>Copy Code</b> 按钮。
                <br/>
                2. 打开您的代码文件 <code>context/ContentContext.tsx</code>。
                <br/>
                3. 找到 <code>const defaultContent: SiteContent = ...</code> 这一段。
                <br/>
                4. 用您复制的代码<b>完全替换</b>它。
             </p>
          </div>

          <div className="flex-1 relative mb-4 overflow-hidden border border-white/10 rounded-lg bg-black">
             <textarea 
                readOnly 
                className="w-full h-full p-4 text-xs font-mono text-green-400 bg-transparent focus:outline-none resize-none"
                value={`const defaultContent: SiteContent = ${JSON.stringify(content, null, 2)};`}
             />
             <button 
               onClick={copyExportCode}
               className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded backdrop-blur transition-colors"
               title="Copy to Clipboard"
             >
               {copied ? <Check size={16} className="text-green-400"/> : <Copy size={16}/>}
             </button>
          </div>

          <button 
            onClick={copyExportCode}
            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all ${copied ? 'bg-green-600 text-white' : 'bg-brandOrange text-white hover:bg-brandOrange/90'}`}
          >
            {copied ? (
              <>
                <Check size={24} /> Code Copied! (已复制)
              </>
            ) : (
              <>
                <Copy size={24} /> Copy Code (复制完整代码)
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Main Panel
  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      
      {/* Panel */}
      <div className="relative w-full max-w-md bg-cyberGray border-l border-brandOrange/30 h-full overflow-y-auto shadow-2xl animate-slide-in flex flex-col">
        <div className="sticky top-0 bg-cyberGray/95 backdrop-blur z-10 border-b border-white/10 p-4 flex justify-between items-center flex-shrink-0">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="text-brandOrange" /> 管理 Panel
          </h2>
          <div className="flex items-center gap-2">
             <button 
                onClick={handleShare}
                className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition-colors"
                title="Share to Client"
             >
                <Share2 size={18} />
             </button>
             <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X />
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
             <TabButton active={activeTab === 'seo'} onClick={() => setActiveTab('seo')} label="SEO" icon={<Search size={14} />} />
             <TabButton active={activeTab === 'hero'} onClick={() => setActiveTab('hero')} label="首页" icon={<Type size={14} />} />
             <TabButton active={activeTab === 'cases'} onClick={() => setActiveTab('cases')} label="战绩" icon={<ImageIcon size={14} />} />
             <TabButton active={activeTab === 'partners'} onClick={() => setActiveTab('partners')} label="商家" icon={<Type size={14} />} />
             <TabButton active={activeTab === 'portfolio'} onClick={() => setActiveTab('portfolio')} label="作品集" icon={<Video size={14} />} />
          </div>

          {/* SEO Settings */}
          {activeTab === 'seo' && (
            <div className="space-y-4">
              <InputGroup label="网站 Title (Browser Title)">
                <input 
                  type="text" 
                  value={content.seo.title}
                  onChange={(e) => updateSEO({ ...content.seo, title: e.target.value })}
                  className="w-full bg-black border border-white/20 rounded p-2 text-white focus:border-brandOrange outline-none"
                />
              </InputGroup>
              <InputGroup label="SEO 描述 (Meta Description)">
                <textarea 
                  rows={4}
                  value={content.seo.description}
                  onChange={(e) => updateSEO({ ...content.seo, description: e.target.value })}
                  className="w-full bg-black border border-white/20 rounded p-2 text-white focus:border-brandOrange outline-none"
                />
              </InputGroup>
            </div>
          )}

          {/* Hero Settings */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <InputGroup label="Main Title (Line 1)">
                <input 
                  type="text" 
                  value={content.hero.title}
                  onChange={(e) => updateHero({ ...content.hero, title: e.target.value })}
                  className="w-full bg-black border border-white/20 rounded p-2 text-white focus:border-brandOrange outline-none"
                />
              </InputGroup>
              <InputGroup label="Subtitle (Line 2 Highlight)">
                <input 
                  type="text" 
                  value={content.hero.subtitle}
                  onChange={(e) => updateHero({ ...content.hero, subtitle: e.target.value })}
                  className="w-full bg-black border border-white/20 rounded p-2 text-white focus:border-brandOrange outline-none"
                />
              </InputGroup>
              <InputGroup label="简介 Description">
                <textarea 
                  rows={4}
                  value={content.hero.description}
                  onChange={(e) => updateHero({ ...content.hero, description: e.target.value })}
                  className="w-full bg-black border border-white/20 rounded p-2 text-white focus:border-brandOrange outline-none"
                />
              </InputGroup>
            </div>
          )}

          {/* Cases Settings */}
          {activeTab === 'cases' && (
            <div className="space-y-8">
              {content.cases.map((c, idx) => (
                <div key={c.id} className="border border-white/10 rounded-lg p-4 bg-black/20">
                  <h3 className="text-brandYellow font-bold mb-3">Case #{idx + 1}</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-400">商家 Name</label>
                      <input 
                        className="w-full bg-black border border-white/10 rounded p-2 text-sm text-white"
                        value={c.name}
                        onChange={(e) => updateCase(c.id, 'name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Result (e.g. Sales 翻倍)</label>
                      <input 
                        className="w-full bg-black border border-white/10 rounded p-2 text-sm text-white"
                        value={c.result}
                        onChange={(e) => updateCase(c.id, 'result', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Story 描述</label>
                      <textarea 
                        className="w-full bg-black border border-white/10 rounded p-2 text-sm text-white"
                        rows={3}
                        value={c.desc}
                        onChange={(e) => updateCase(c.id, 'desc', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-2">Change Photo</label>
                      <div className="flex items-center gap-3">
                        <img src={c.image} className="w-12 h-12 object-cover rounded" />
                        <label className="cursor-pointer bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 rounded flex items-center gap-2 transition-colors">
                          <ImageIcon size={14} /> Upload Image
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => updateCase(c.id, 'image', url))} />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Partners Settings */}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="bg-black/40 p-4 rounded border border-white/10">
                <h3 className="text-sm font-bold text-white mb-3">Add New Partner (新增商家)</h3>
                <div className="space-y-3">
                   <input 
                    type="text" 
                    value={newPartnerName}
                    onChange={(e) => setNewPartnerName(e.target.value)}
                    placeholder="Shop Name" 
                    className="w-full bg-black border border-white/20 rounded p-2 text-sm text-white"
                   />
                   
                   <div className="flex items-center gap-3">
                      {newPartnerLogo && <img src={newPartnerLogo} className="w-10 h-10 rounded-full object-cover border border-white/20" />}
                      <label className="flex-1 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs px-3 py-2 rounded flex items-center justify-center gap-2 transition-colors">
                        <Upload size={14} /> {newPartnerLogo ? 'Change Logo' : 'Upload Logo'}
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setNewPartnerLogo(url))} />
                      </label>
                   </div>

                   <button 
                    onClick={handleAddPartner}
                    className="w-full bg-brandOrange text-white font-bold px-3 py-2 rounded text-sm hover:bg-brandOrange/80"
                   >
                     Add Partner
                   </button>
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-gray-400 mt-6 mb-2">Edit Partners List (现有商家)</h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                {content.partners.map(p => (
                  <div key={p.id} className="bg-white/5 p-3 rounded border border-white/5 flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex-1 space-y-2">
                        <input 
                           type="text"
                           value={p.name}
                           onChange={(e) => updatePartner(p.id, 'name', e.target.value)}
                           className="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-sm text-white"
                        />
                        <div className="flex items-center gap-3">
                            {p.logo ? (
                                <img src={p.logo} alt="logo" className="w-8 h-8 rounded-full object-cover border border-white/10 bg-black" />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-gray-500 border border-white/10">No</div>
                            )}
                            <label className="cursor-pointer bg-brandOrange/10 hover:bg-brandOrange/20 text-brandOrange text-xs px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors border border-brandOrange/30">
                                <Upload size={12} /> Upload Logo
                                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => updatePartner(p.id, 'logo', url))} />
                            </label>
                        </div>
                      </div>
                      <button onClick={() => removePartner(p.id)} className="text-red-500 hover:text-white p-2 bg-red-500/10 hover:bg-red-500 rounded transition-colors" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Settings */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="bg-black/40 p-4 rounded border border-white/10">
                <h3 className="text-sm font-bold text-white mb-3">Add New Work (上传作品)</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Title (标题)</label>
                    <input 
                      type="text" 
                      value={newWorkTitle}
                      onChange={(e) => setNewWorkTitle(e.target.value)}
                      placeholder="e.g. Mr. Wu CNY Menu" 
                      className="w-full bg-black border border-white/20 rounded p-2 text-sm text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Type (类型)</label>
                    <div className="flex gap-2">
                       <button 
                         onClick={() => setNewWorkType('image')}
                         className={`flex-1 py-2 rounded text-sm font-bold flex items-center justify-center gap-2 ${newWorkType === 'image' ? 'bg-brandYellow text-black' : 'bg-white/5 text-gray-400'}`}
                       >
                         <ImageIcon size={14} /> Image
                       </button>
                       <button 
                         onClick={() => setNewWorkType('video')}
                         className={`flex-1 py-2 rounded text-sm font-bold flex items-center justify-center gap-2 ${newWorkType === 'video' ? 'bg-red-600 text-white' : 'bg-white/5 text-gray-400'}`}
                       >
                         <Video size={14} /> Video
                       </button>
                    </div>
                  </div>

                  <div>
                     <label className="text-xs text-gray-400 mb-1 block">Upload File (文件)</label>
                     {newWorkFile ? (
                        <div className="relative group">
                          {newWorkType === 'image' ? (
                            <img src={newWorkFile} className="w-full h-32 object-cover rounded border border-white/10" />
                          ) : (
                            <video src={newWorkFile} className="w-full h-32 object-cover rounded border border-white/10 bg-black" />
                          )}
                          <button 
                            onClick={() => setNewWorkFile(undefined)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-80 hover:opacity-100"
                          >
                            <Trash2 size={12}/>
                          </button>
                        </div>
                     ) : (
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded hover:border-brandOrange/50 bg-black/20 cursor-pointer transition-colors">
                          <Upload className="text-gray-400 mb-2" />
                          <span className="text-xs text-gray-500">Click to upload {newWorkType}</span>
                          <span className="text-[10px] text-gray-600 mt-1">Max 2MB</span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept={newWorkType === 'image' ? "image/*" : "video/*"} 
                            onChange={(e) => handleFileUpload(e, (url) => setNewWorkFile(url))} 
                          />
                        </label>
                     )}
                  </div>

                  <button 
                    onClick={handleAddWork}
                    className="w-full bg-brandOrange text-white font-bold px-3 py-3 rounded text-sm hover:bg-brandOrange/80 shadow-glow-orange flex justify-center gap-2"
                  >
                    <Plus size={16} /> Publish Work
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Portfolio (现有作品)</h3>
                 {(content.portfolio || []).map(item => (
                   <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 hover:border-white/20 transition-colors">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 flex-shrink-0 bg-black rounded overflow-hidden border border-white/10">
                          {item.type === 'image' ? (
                            <img src={item.url} className="w-full h-full object-cover"/>
                          ) : (
                             <div className="w-full h-full flex items-center justify-center text-red-500 bg-gray-900">
                               <Video size={16} />
                             </div>
                          )}
                        </div>
                        <div className="truncate">
                           <p className="text-white text-sm font-bold truncate">{item.title}</p>
                           <p className="text-[10px] text-gray-400 uppercase">{item.type}</p>
                        </div>
                      </div>
                      <button onClick={() => removePortfolioItem(item.id)} className="text-gray-500 hover:text-red-500 p-2 transition-colors">
                        <Trash2 size={14} />
                      </button>
                   </div>
                 ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-cyberGray/95 backdrop-blur z-10 flex flex-col gap-3">
          <button 
            onClick={() => setShowExport(true)}
            className="w-full bg-green-600 text-white font-bold py-3 rounded hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-lg animate-pulse-glow"
          >
            <Download size={18} /> 📥 Export Data for GitHub
          </button>

          <button 
            onClick={resetContent}
            className="w-full flex justify-center items-center gap-2 text-red-500 hover:text-red-400 text-xs py-2 font-bold bg-red-500/5 hover:bg-red-500/10 rounded"
          >
            <RotateCcw size={12} /> Restore Default (重置)
          </button>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, label, icon }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${active ? 'bg-brandOrange text-white shadow-glow-orange' : 'bg-black text-gray-400 border border-white/10 hover:border-white/30'}`}
  >
    {icon} {label}
  </button>
);

const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-bold text-gray-300 mb-2">{label}</label>
    {children}
  </div>
);